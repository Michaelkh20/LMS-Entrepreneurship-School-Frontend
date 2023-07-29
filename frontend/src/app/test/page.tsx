import DownloadButton from "@/components/Buttons/DownloadButton/dwnld-button"
import FormComponent from "@/components/Form/form"
import LoadButton from "@/components/LoadButton/load-button"
import TradeLotCard from "@/components/LotCard/lot-card"

export default function Test() {
    return (
        <main>
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