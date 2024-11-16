import { create } from "zustand";

interface urlDetails {
  id: string;
  lastChecked: Date | null;
  currentStatus: string | null;
   isPaused: boolean | null
  currentlyUpFor: Date | null;
  monitoringStartTime: Date | null;
  uptimeInMinutes: number | null;
}

interface StoreState {
  urlDetails: urlDetails;
  updateDetails: (newUrlData: Partial<urlDetails>) => void;
}

export const useStore = create<StoreState>((set) => ({
  urlDetails: {
    id: "",
    currentlyUpFor: null,
    isPaused:null,
    currentStatus: null,
    lastChecked: null,

    monitoringStartTime: null,
    uptimeInMinutes: null,
  },
  updateDetails: (newUrlData) =>
    set((state) => ({
      urlDetails: { ...state.urlDetails, ...newUrlData },
    })),
}));
