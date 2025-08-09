class DragonApi {
    #BASE_URL = "https://dragonball-api.com/api"
    // private property

    async getDragons() {
        const res = await fetch(this.#BASE_URL + '/characters')
        const data = await res.json()
        return data
    }

    async getSinger(id) {
        const res = await fetch(this.#BASE_URL + `/characters/${id}`)
        return await res.json()
    }
}

export const dragonApi = new DragonApi()