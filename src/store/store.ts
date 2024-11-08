import { create } from "zustand";

interface urlDetails {
  id: string ;
  lastChecked: string | null;
  currentStatus: string | null;
  upTimePercentage: number | null;
  currentlyUpFor: string | null;
}

interface StoreState {
  urlDetails: urlDetails;
  updateDetails: (newUrlData: Partial<urlDetails>) => void;
}

export const useStore = create<StoreState>((set) => ({
  urlDetails: {
    id: '',
    currentlyUpFor: null,
    currentStatus: null,
    lastChecked: null,
    upTimePercentage: null,
  },
  updateDetails: (newUrlData) =>
    set((state) => ({
      urlDetails: { ...state.urlDetails, ...newUrlData },
    })),
}));
