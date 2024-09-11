import AppSectionsList from "./AppSectionsList.js";

export default {
    components: { AppSectionsList },
    template: /*html*/ `
        <app-sections-list 
            headline="可选资源" 
            :buyChild="filters.beforeBuy">
        </app-sections-list>
        <app-sections-list 
            headline="已选资源" 
            :buyChild="filters.afterBuy">
        </app-sections-list>
    `,
    data() {
        return {
            foods: [
                { id: 1, name: '原味鱿鱼丝', image: './images/原味鱿鱼丝.png', purchased: false },
                { id: 2, name: '辣味鱿鱼丝', image: './images/辣味鱿鱼丝.png', purchased: false },
                { id: 3, name: '炭烧味鱿鱼丝', image: './images/炭烧味鱿鱼丝.png', purchased: false }
            ]
        }
    },
    computed: {
        filters() {
            return {
                beforeBuy: this.foods.filter(item => !item.purchased),
                afterBuy: this.foods.filter(item => item.purchased)
            }
        }
    }
}