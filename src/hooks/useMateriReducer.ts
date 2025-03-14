import { updateProgress } from "@/api/services/course";
import { Materi } from "@/type/Tkelas";
import { useReducer, useRef, useEffect } from "react";

interface State {
  openMateriId: string | null;
  materiTerpilih: Materi | null;
  currentIndex: number;
  isFinished: { [key: string]: boolean };
  isLoading: boolean;
}

type Action =
  | { type: "TOGGLE_MATERI"; payload: string }
  | { type: "SET_MATERI"; payload: Materi }
  | { type: "NEXT_MATERI" }
  | { type: "PREVIOUS_MATERI" }
  | { type: "FINISH"; payload: { materi_id: string; finished: boolean } }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_STATE"; payload: Partial<State> };

const initialState: State = {
  openMateriId: null,
  materiTerpilih: null,
  currentIndex: 0,
  isFinished: {},
  isLoading: false,
};

const reducer = (state: State, action: Action, dataMateri: Materi[]): State => {
  switch (action.type) {
    case "TOGGLE_MATERI":
      return {
        ...state,
        openMateriId:
          state.openMateriId === action.payload ? null : action.payload,
      };
    case "SET_MATERI":
      return {
        ...state,
        materiTerpilih: action.payload,
      };
    case "NEXT_MATERI":
      const nextIndex = state.currentIndex + 1;
      return {
        ...state,
        currentIndex: nextIndex,
        materiTerpilih: dataMateri[nextIndex],
      };
    case "PREVIOUS_MATERI":
      const prevIndex = state.currentIndex - 1;
      return {
        ...state,
        currentIndex: prevIndex,
        materiTerpilih: dataMateri[prevIndex],
      };
    case "FINISH":
      const newIsFinished = {
        ...state.isFinished,
        [action.payload.materi_id]: action.payload.finished,
      };
      localStorage.setItem("isFinished", JSON.stringify(newIsFinished));
      return {
        ...state,
        isFinished: newIsFinished,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const useMateriReducer = (dataMateri: Materi[]) => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => reducer(state, action, dataMateri),
    initialState,
    (initial) => {
      const savedState = localStorage.getItem("materiState");
      return savedState ? { ...initial, ...JSON.parse(savedState) } : initial;
    }
  );

  const materiRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    localStorage.setItem("materiState", JSON.stringify(state));
  }, [state]);

  const handleMateriClick = (idMateri: string) => {
    const materi = dataMateri.find((m) => m.materi_id === idMateri);
    if (materi) {
      dispatch({ type: "SET_MATERI", payload: materi });
      dispatch({
        type: "FINISH",
        payload: { materi_id: idMateri, finished: false },
      });

      if (materiRef.current) {
        materiRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      console.log("Materi tidak ditemukan!");
    }
  };

  const toggleMateri = (idMateri: string) => {
    dispatch({ type: "TOGGLE_MATERI", payload: idMateri });
  };

  const handleNext = () => {
    if (state.currentIndex < dataMateri.length - 1) {
      const nextIndex = state.currentIndex + 1;
      const nextMateri = dataMateri[nextIndex];
      dispatch({ type: "NEXT_MATERI" });

      toggleMateri(nextMateri.materi_id);

      if (materiRef.current) {
        materiRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  const handlePrevious = () => {
    if (state.currentIndex > 0) {
      const prevIndex = state.currentIndex - 1;
      const prevMateri = dataMateri[prevIndex];
      dispatch({ type: "PREVIOUS_MATERI" });

      toggleMateri(prevMateri.materi_id);

      if (materiRef.current) {
        materiRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  const handleFinish = async (materi_id: string) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      await updateProgress(materi_id);
      dispatch({ type: "FINISH", payload: { materi_id, finished: true } });
    } catch (error) {
      console.error("Error finishing materi:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return {
    dispatch,
    state,
    handleMateriClick,
    toggleMateri,
    handleNext,
    handlePrevious,
    handleFinish,
    materiRef,
  };
};

export default useMateriReducer;
