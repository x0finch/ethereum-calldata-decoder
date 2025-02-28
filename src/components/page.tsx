import { Header } from "./header"
import { HistoryList } from "./history-list"
import { Playground } from "./playground"
import { Searching } from "./searching"
import { SelectedHistoryItemProvider } from "./selected-history-provider"
import { TransactionCard } from "./transaction-card"

export function Page({ historyId }: { historyId: string }) {
  return (
    <SelectedHistoryItemProvider historyId={historyId}>
      <div className="min-h-screen my-12 px-8">
        <Header />
        <main className="max-w-7xl mx-auto flex flex-row flex-wrap gap-8 md:gap-16 mt-16">
          <div id="leftPanel" className="flex-[2] min-w-[360px]">
            <Searching />
            <TransactionCard />
            <Playground />
          </div>
          <div id="rightPanel" className="flex-1 min-w-[360px]">
            <HistoryList />
          </div>
        </main>
      </div>
    </SelectedHistoryItemProvider>
  )
}
