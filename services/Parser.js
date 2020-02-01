import Type from '../utils/Type'

export default class Parser {

    webBanners = []
    campainBanners = []
    categories = []
    verticalList = []
    horizontalList = []
    preparedList = []
    discountList = []
    orderedList = []

     parseMainJson(data) {
        for (let item of data) {
            switch (item.type) {
                case Type.WEB_BANNER:
                    this.addToWebBanners(item)
                    break
                case Type.CAMPAIN_BANNER:
                    this.addToCampainBanners(item)
                    break
                case Type.CATEGORY:
                    this.addToCategories(item)
                    break
                case Type.CATEGORY_LIST_VERTICAL:
                    this.addToVerticalList(item)
                    break
                case Type.TIMER_HORIZONTAL:
                    this.addToHorizontalList(item)
                    break
                case Type.PREPARED_LIST:
                    this.addToPreparedList(item)
                    break
                case Type.DISCOUNT_LIST:
                    this.addToDiscountList(item)
                    break
                case Type.ORDERED_LIST:
                    this.addToOrderedList(item)
                    break
            }
        }
    }

    addToWebBanners(item) {
        this.webBanners.push(item)
    }

    addToCampainBanners(item) {
        this.campainBanners.push(item)
    }

    addToCategories(item) {
        this.categories.push(item)
    }

    addToVerticalList(item) {
        this.verticalList.push(item)
    }

    addToHorizontalList(item) {
        this.horizontalList.push(item)
    }

    addToPreparedList(item) {
        this.preparedList.push(item)
    }

    addToDiscountList(item) {
        this.discountList.push(item)
    }

    addToOrderedList(item) {
        this.orderedList.push(item)
    }
}
