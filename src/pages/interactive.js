import React from 'react'
// import Footer from '@theme-original/Footer'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { MendableFloatingButton } from '@mendable/search'
import Layout from '@theme/Layout';
import { MendableSearchBar } from '@mendable/search'
import { MendableInPlace } from "@mendable/search"

// https://docs.mendable.ai/components/chat-bubble
// https://pnp.github.io/cli-microsoft365/
export default function SearchBarWrapper() {
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext()

    return (
        <>
            <Layout title="互動問答" description="fields">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-3 lg:py-5 px-4 mx-auto max-w-screen-md">
                        <p className="mb-2 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">歡迎來到互動問答頁面</p>
                        {/* <p className="mb-2 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg">問答一次後，請點擊對話框外的空白處，點擊輸入欄，然後再點擊<svg class="stroke-green-700 dark:stroke-teal-100" stroke="#fff" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path></svg>圖示繼續問答。</p> */}
                        <div class="bg-teal-100 dark:bg-indigo-900 border-t-4 border-teal-500 rounded-b text-teal-900 dark:text-teal-100 px-4 py-3 shadow-md" role="alert">
                            <div class="flex">
                                <div class="py-1"><svg class="fill-current dark:fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                                <div>
                                    <p>此頁面仍處於測試階段。</p>
                                    <p>機器回答提供的答案可能不準確，如內容有任何歧義或不一致之處，概以已出版內容為準。</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <MendableInPlace
                            anon_key={customFields.mendableAnonKey}
                            style={{ accentColor: '#179C54', darkMode: false }}
                            hintText="什麼是認主獨一？"
                            hintQuestions={['什麼是認主獨一？', '爾撒（耶穌）是安拉的兒子嗎？', '總結關於結婚和離婚的規定','總結《離婚章》']}
                            dialogPlaceholder="什麼是認主獨一？"
                            showSimpleSearch={true}總結關於結婚和離婚的規定
                            messageSettings={{
                                prettySources: true,
                                // sourcesFirst: true
                            }}
                            language="ja"
                            cmdShortcutKey='q'
                        />
                    </div>
                </section>

            </Layout>
        </>
    )
}
