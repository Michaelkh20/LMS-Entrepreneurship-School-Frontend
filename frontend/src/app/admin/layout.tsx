import HeaderAdmin from "@/components/headers/header-admin/header";
import React from "react";
import styles from "./layout.module.css"

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <HeaderAdmin/>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
