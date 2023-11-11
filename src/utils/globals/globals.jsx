import { User2, BookDown, Send, TableProperties, LayoutDashboard } from "lucide-react"

export const globals = {
    paths: {
        home: '/',
        login: '/login',
        signup: '/signup',
        dashboard: '/app',
        transactions: '/app/transactions',
        clients: '/app/clients',
        transfer: '/app/transfer',
        deposit: '/app/deposit'
    },
    messages: {
        signUp: {
            success: "Account created successfully!",
            emailTaken: "Email is taken"
        },
    }
}

export const SideBarLinks = [
    {
        to: globals.paths.dashboard,
        text: "Overview",
        icon: <LayoutDashboard />
    },
    {
        to: globals.paths.transactions,
        text: "Transactions",
        icon: <TableProperties />
    },
    {
        to: globals.paths.clients,
        text: "Clients",
        icon: <User2 />
    },
    {
        to: globals.paths.transfer,
        text: "Transfer",
        icon: <Send />
    },
    {
        to: globals.paths.deposit,
        text: "Deposit",
        icon: <BookDown />
    },
]
