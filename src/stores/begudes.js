import { defineStore } from 'pinia'

export const useBegudesStore = defineStore('begudes', {
  state: () => ({
    arrayBegudes: []
  }),
  getters: {
    getArrayBegudes() {
      return this.arrayBegudes
    }
  },
  actions: {
    addBeguda(beguda) {
      this.arrayBegudes.push(beguda)
    }
  }
})
