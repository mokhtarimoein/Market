import React from 'react'
import Type from '../utils/Type'
import WebBannerLayput from '../layout/WebBannerLayput'
import CampainBannerLayout from '../layout/CampainBannerLayout'
import CategoryLayout from '../layout/CategoryLayout'
import VerticalListLayout from '../layout/VerticalListLayout'
import HorizontalListLayout from '../layout/HorizontalListLayout'
import PreparedListLayout from '../layout/PreparedListLayout'
import DiscountListLayout from '../layout/DiscountListLayout'
import OrderedListLayout from '../layout/OrderedListLayout'

const MainFactory = ({ data }) => {
    console.log('--->', data.type)
    switch (data.type) {
        case Type.WEB_BANNER:
            return <WebBannerLayput data={data} />
        case Type.CAMPAIN_BANNER:
            return <CampainBannerLayout data={data} />
        case Type.CATEGORY:
            return <CategoryLayout data={data} />
        case Type.CATEGORY_LIST_VERTICAL:
            return <VerticalListLayout data={data} />
        case Type.TIMER_HORIZONTAL:
            return <HorizontalListLayout data={data} />
        case Type.PREPARED_LIST:
            return <PreparedListLayout data={data} />
        case Type.DISCOUNT_LIST:
            return <DiscountListLayout data={data} />
        case Type.ORDERED_LIST:
            return <OrderedListLayout data={data} />
        default:
            return <WebBannerLayput data={data} />
    }
}

export default MainFactory