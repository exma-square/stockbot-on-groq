import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 border bg-background p-8">
        <h1 className="text-lg font-semibold">
          歡迎使用由 AI 驅動的互動助手！
        </h1>
        <p className="leading-normal text-sm">
          這是一個開源的 AI 聊天機器人，使用函數調用來呈現相關的
          TradingView 股市小工具。{' '}
          <span className="font-muted-foreground">
            使用{' '}
            <ExternalLink href="https://sdk.vercel.ai">
              Vercel AI SDK{' '}
            </ExternalLink>
            <ExternalLink href="https://tradingview.com">
              、TradingView 小工具
            </ExternalLink>
            建置，並由{' '}
            <ExternalLink href="https://groq.com">
              Groq 上的 Llama3-70b
            </ExternalLink>
            {' '}驅動
          </span>
        </p>
      </div>
    </div>
  )
}
