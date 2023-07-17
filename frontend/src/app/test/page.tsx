import DownloadButton from "@/components/DownloadButton/dwnld-button"
import FormComponent from "@/components/Form/form"
import LoadButton from "@/components/LoadButton/load-button"
import TradeLotCard from "@/components/LotCard/lot-card"
import HeaderAdminBig from "@/components/headers/header-admin-big/header"
import HeaderAdmin from "@/components/headers/header-admin/header"
import HeaderLernerBig from "@/components/headers/header-lerner-big/header"
import HeaderLerner from "@/components/headers/header-lerner/header"
import HeaderTrackerBig from "@/components/headers/header-tracker-big/header"
import HeaderTracker from "@/components/headers/header-tracker/header"

export default function Test() {
    return (
        <main>
            <HeaderAdmin />
            <HeaderAdminBig />
            <HeaderLerner />
            <HeaderLernerBig />
            <HeaderTrackerBig />
            <HeaderTracker />
            <TradeLotCard
                number={12345}
                description="Торговый лот описания"
                performer="Имя исполнителя"
                price={100}
                conditions="Условия торгового лота"
            />
            <FormComponent/>
            <LoadButton/>
            <DownloadButton/>
            <h1>Test</h1>
        </main>
    )
}