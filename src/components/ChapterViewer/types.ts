interface Chapter {
  isOpen: boolean
}

interface Chapters {
  [index: string]: Chapter
}

export interface State {
  chapters: Chapters,
  currentSubChapter?: string,
}

export interface SelectedState {
  selectedSC: string
  setSelectedSC: (id: string) => void
}