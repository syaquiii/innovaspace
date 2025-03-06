import { useReducer, useRef } from "react";
import { Materi } from "@/type/TDummyData";

interface State {
  openMateriId: number | null;
  materiTerpilih: Materi | null;
  currentIndex: number;
  isFinished: boolean;
}

type Action =
  | { type: "TOGGLE_MATERI"; payload: number }
  | { type: "SET_MATERI"; payload: Materi }
  | { type: "NEXT_MATERI" }
  | { type: "PREVIOUS_MATERI" }
  | { type: "FINISH"; payload: boolean };

const initialState: State = {
  openMateriId: null,
  materiTerpilih: null,
  currentIndex: 0,
  isFinished: false,
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
      const isFinished = nextIndex >= dataMateri.length - 1;
      return {
        ...state,
        currentIndex: nextIndex,
        materiTerpilih: dataMateri[nextIndex],
        isFinished,
      };
    case "PREVIOUS_MATERI":
      const prevIndex = state.currentIndex - 1;
      return {
        ...state,
        currentIndex: prevIndex,
        materiTerpilih: dataMateri[prevIndex],
        isFinished: false,
      };
    case "FINISH":
      return {
        ...state,
        isFinished: action.payload,
      };
    default:
      return state;
  }
};

const useMateriReducer = (dataMateri: Materi[]) => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => reducer(state, action, dataMateri),
    initialState
  );

  const materiRef = useRef<HTMLDivElement | null>(null);

  const handleMateriClick = (idMateri: number) => {
    const materi = dataMateri.find((m) => m.id_materi === idMateri);
    if (materi) {
      dispatch({ type: "SET_MATERI", payload: materi });

      // Reset isFinished when a new materi is selected manually
      dispatch({ type: "FINISH", payload: false });

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

  const toggleMateri = (idMateri: number) => {
    dispatch({ type: "TOGGLE_MATERI", payload: idMateri });
  };

  const handleNext = () => {
    if (state.currentIndex < dataMateri.length - 1) {
      const nextIndex = state.currentIndex + 1;
      const nextMateri = dataMateri[nextIndex];
      dispatch({ type: "NEXT_MATERI" });

      // Buka materi berikutnya
      toggleMateri(nextMateri.id_materi);

      // Scroll ke elemen yang direferensikan
      if (materiRef.current) {
        materiRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      dispatch({ type: "FINISH", payload: true });
    }
  };

  const handlePrevious = () => {
    if (state.currentIndex > 0) {
      const prevIndex = state.currentIndex - 1;
      const prevMateri = dataMateri[prevIndex];
      dispatch({ type: "PREVIOUS_MATERI" });

      // Buka materi sebelumnya
      toggleMateri(prevMateri.id_materi);

      // Scroll ke elemen yang direferensikan
      if (materiRef.current) {
        materiRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return {
    state,
    handleMateriClick,
    toggleMateri,
    handleNext,
    handlePrevious,
    materiRef,
  };
};

export default useMateriReducer;
