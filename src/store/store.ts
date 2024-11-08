import { create } from "zustand";

interface urlDetails {
  lastChecked: string | null;
  currentStatus: string | null;
  upTimePercentage: number | null;
  currentlyUpFor: string | null;
}

interface StoreState {
  urlDetails: urlDetails;
  updateDetails: (newUrlData: urlDetails) => void;
}

export const useStore = create<StoreState>((set) => ({
  urlDetails: {
    currentlyUpFor: null,
    currentStatus: null,
    lastChecked: null,
    upTimePercentage: null,
  },
  updateDetails: (newUrlData) =>
    set((state) => ({
      urlDetails: { ...newUrlData },
    })),
}));
