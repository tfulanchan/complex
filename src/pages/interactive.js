import React from 'react'
// import Footer from '@theme-original/Footer'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { MendableFloatingButton } from '@mendable/search'
import Layout from '@theme/Layout';
import { MendableSearchBar } from '@mendable/search'

// https://docs.mendable.ai/components/chat-bubble
// https://pnp.github.io/cli-microsoft365/
export default function SearchBarWrapper() {
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext()

    return (
        <>
            <Layout title="fields" description="fields">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-3 lg:py-5 px-4 mx-auto max-w-screen-md">
                        <p className="mb-2 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">歡迎來到互動問答頁面</p>
                        <p className="mb-2 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg">問答一次後，請點擊對話框外的空白處，點擊輸入欄，然後再點擊綠色圖示繼續問答。</p>
                        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div class="flex">
                                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                                <div>
                                    <p>此頁面仍處於測試階段。</p>
                                    <p>機器回答可能不準確，如內容有任何歧義或不一致之處，概以已出版内容為準。</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <MendableSearchBar
                            anon_key={customFields.mendableAnonKey}
                            style={{ accentColor: '#179C54', darkMode: false }}
                            placeholder="安拉為何創造人類？"
                            hintQuestions={['安拉為何創造人類？', '爾撒（耶穌）是安拉的兒子嗎？', '誰是真主？']}
                            dialogPlaceholder="安拉為何創造人類？"
                            showSimpleSearch={true}
                            messageSettings={{
                                prettySources: true,
                                // sourcesFirst: true
                            }}
                            language="ja"
                        />
                    </div>
                </section>
            </Layout>
        </>
    )
}