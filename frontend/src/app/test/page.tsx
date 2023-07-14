import HeaderAdminBig from "@/components/headers/header-admin-big/header"
import HeaderAdmin from "@/components/headers/header-admin/header"
import HeaderLernerBig from "@/components/headers/header-lerner-big/header"
import HeaderLerner from "@/components/headers/header-lerner/header"
import HeaderTrackerBig from "@/components/headers/header-tracker-big/header"
import HeaderTracker from "@/components/headers/header-tracker/header"

export default function Test() {
    return (
        <main>
            <HeaderAdmin/>
            <HeaderAdminBig/>
            <HeaderLerner/>
            <HeaderLernerBig/>
            <HeaderTrackerBig/>
            <HeaderTracker/>
            <h1>Test</h1>
        </main>
    )
}