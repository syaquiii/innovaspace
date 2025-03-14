"use client";

import React, {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  FC,
  useCallback,
} from "react";
import { Thread, Comment, CreateCommentResponse } from "@/type/TThread";
import {
  createThread,
  getAllThreads,
  getThreadDetail,
} from "@/api/services/threads";
import { createComment } from "@/api/services/comment";
import { getTokenFromCookies } from "@/utils/getToken";
import { jwtDecode } from "jwt-decode";

interface State {
  threads: Thread[];
  loading: boolean;
  error: string | null;
  userId: string | null;
}

interface ThreadContextProps {
  state: State;
  addThread: (kategori: string, isi: string) => Promise<void>;
  fetchThreadDetail: (id: string) => Promise<Thread>;
  addComment: (thread_id: string, isi_komentar: string) => Promise<void>;
}

const initialState: State = {
  threads: [],
  loading: false,
  error: null,
  userId: null,
};

export const ThreadContext = createContext<ThreadContextProps | undefined>(
  undefined
);

type Action =
  | { type: "FETCH_THREADS_REQUEST" }
  | { type: "FETCH_THREADS_SUCCESS"; payload: Thread[] }
  | { type: "FETCH_THREADS_FAILURE"; payload: unknown }
  | { type: "CREATE_THREAD_REQUEST" }
  | { type: "CREATE_THREAD_SUCCESS"; payload: Thread }
  | { type: "CREATE_THREAD_FAILURE"; payload: unknown }
  | { type: "FETCH_THREAD_DETAIL_REQUEST" }
  | { type: "FETCH_THREAD_DETAIL_SUCCESS"; payload: Thread }
  | { type: "FETCH_THREAD_DETAIL_FAILURE"; payload: unknown }
  | { type: "CREATE_COMMENT_REQUEST" }
  | {
      type: "CREATE_COMMENT_SUCCESS";
      payload: { comment: Comment; thread_id: string };
    }
  | { type: "CREATE_COMMENT_FAILURE"; payload: unknown }
  | { type: "SET_USER_ID"; payload: string };

const parseDate = (dateString: string) => {
  if (!dateString) return new Date(0); // Handle undefined or empty date
  const [datePart, timePart] = dateString.split(" ");
  if (!datePart || !timePart) return new Date(0); // Handle improper format
  const [day, month, year] = datePart.split("/").map(Number);
  if (isNaN(day) || isNaN(month) || isNaN(year)) return new Date(0); // Handle invalid date
  return new Date(year, month - 1, day, ...timePart.split(":").map(Number));
};

const threadReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "FETCH_THREADS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_THREADS_SUCCESS":
      return {
        ...state,
        loading: false,
        threads: (action.payload || [])
          .filter((thread) => thread.tanggal)
          .sort(
            (a, b) =>
              parseDate(b.tanggal).getTime() - parseDate(a.tanggal).getTime()
          ),
      };
    case "FETCH_THREADS_FAILURE":
      return { ...state, loading: false, error: String(action.payload) };
    case "CREATE_THREAD_REQUEST":
      return { ...state, loading: true, error: null };
    case "CREATE_THREAD_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_THREAD_FAILURE":
      return { ...state, loading: false, error: String(action.payload) };
    case "FETCH_THREAD_DETAIL_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_THREAD_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        threads: state.threads.map((thread) =>
          thread.thread_id === action.payload.thread_id
            ? { ...action.payload }
            : thread
        ),
      };
    case "FETCH_THREAD_DETAIL_FAILURE":
      return { ...state, loading: false, error: String(action.payload) };
    case "CREATE_COMMENT_REQUEST":
      return { ...state, loading: true, error: null };
    case "CREATE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        threads: state.threads.map((thread) =>
          thread.thread_id === action.payload.thread_id
            ? {
                ...thread,
                comments: [action.payload.comment, ...(thread.comments || [])],
              }
            : thread
        ),
      };
    case "CREATE_COMMENT_FAILURE":
      return { ...state, loading: false, error: String(action.payload) };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};

interface ThreadProviderProps {
  children: ReactNode;
}

export const ThreadProvider: FC<ThreadProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(threadReducer, initialState);

  useEffect(() => {
    const token = getTokenFromCookies();
    if (token) {
      const decodedToken = jwtDecode<{ UserId: string; exp: number }>(token);
      const userId = decodedToken.UserId;
      dispatch({ type: "SET_USER_ID", payload: userId });
    }
  }, []);

  const fetchThreads = async () => {
    dispatch({ type: "FETCH_THREADS_REQUEST" });
    try {
      const data = await getAllThreads();
      dispatch({ type: "FETCH_THREADS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_THREADS_FAILURE", payload: error });
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  const addThread = async (kategori: string, isi: string) => {
    dispatch({ type: "CREATE_THREAD_REQUEST" });
    try {
      await createThread(kategori, isi);
      await fetchThreads();
    } catch (error) {
      dispatch({ type: "CREATE_THREAD_FAILURE", payload: error });
    }
  };

  const fetchThreadDetail = useCallback(async (id: string) => {
    dispatch({ type: "FETCH_THREAD_DETAIL_REQUEST" });
    try {
      const threadDetail = await getThreadDetail(id);
      dispatch({ type: "FETCH_THREAD_DETAIL_SUCCESS", payload: threadDetail });
      return threadDetail;
    } catch (error) {
      dispatch({ type: "FETCH_THREAD_DETAIL_FAILURE", payload: error });
      throw error;
    }
  }, []);

  const addComment = async (thread_id: string, isi_komentar: string) => {
    if (!state.userId) {
      throw new Error("User ID not found.");
    }
    dispatch({ type: "CREATE_COMMENT_REQUEST" });
    try {
      const newCommentResponse: CreateCommentResponse = await createComment(
        thread_id,
        state.userId,
        isi_komentar
      );
      dispatch({
        type: "CREATE_COMMENT_SUCCESS",
        payload: { comment: newCommentResponse.comment, thread_id },
      });
    } catch (error) {
      dispatch({ type: "CREATE_COMMENT_FAILURE", payload: error });
    }
  };

  return (
    <ThreadContext.Provider
      value={{ state, addThread, fetchThreadDetail, addComment }}
    >
      {children}
      {state.loading && <div>Loading...</div>}
    </ThreadContext.Provider>
  );
};
