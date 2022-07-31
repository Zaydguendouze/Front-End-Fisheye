
class App {
    constructor() {
        this.$photographHeader = document.querySelector('.photograph-header')

        this.profilesApi = new ProfileApi('/data/photographers.json')
    }

    async main() {

        const profilesData = await this.profilesApi.getProfiles()

        profilesData
            // .map(photographer => new Photographer(photographer))
            .forEach(photographer => {

                console.log(photographer);

                const Template = new PhotographerCard(photographer)
                this.$photographHeader.appendChild(
                    Template.createPhotographerCard()
                )
            })
        }
}

const app = new App()
app.main()