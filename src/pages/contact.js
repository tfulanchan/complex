import React, { useState, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import emailjs from 'emailjs-com';

const serviceID = 'service_bw6rf5b';
const templateID = 'template_isj7757';
const templateParams = '';
const publicKey = '5r2tCrDs5VYOZxpfF';

const contactForm = () => {
    const history = useHistory();
    const [showRedirectMessage, setShowRedirectMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('留言已提交');

        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then((result) => {
                console.log("result", history);
                setShowRedirectMessage(true);
                setTimeout(() => {
                    // history.push('/');
                    history.goBack(); // Redirect back to the previous page
                }, 3000); // 5 seconds delay before redirection
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <Layout title="留言" description="留言">
            {showRedirectMessage ? (
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-3 lg:py-5 px-4 mx-auto max-w-screen-md">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 className="mb-2 lg:mb-4 font-light ">
                            留言已提交，歡迎您繼續閱讀......
                        </h1>
                    </div>
                </section>
            ) : (
                <section className="bg-white dark:bg-gray-900">
                <div className="py-3 lg:py-5 px-4 mx-auto max-w-screen-md">
                    {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">お問い合わせ</h2> */}
                    <p className="mb-2 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">歡迎作出跟技術問題或編輯誤差有關的留言</p>
                    <form id="formID" onSubmit={sendEmail} className="space-y-8a">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">姓名</label>
                            <input type="text" id="name" className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                name="name" placeholder="您的姓名" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">電郵地址</label>
                            <input type="email" id="email" className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            name="email" placeholder="email@address.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">標題</label>
                            <input type="text" id="subject" className="mb-2 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            name="subject" placeholder="您留言的主旨" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">信息</label>
                            <textarea id="message" rows="6" className="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                            name="message" placeholder="您的留言..." required></textarea>
                        </div>
                        <button type="submit" onSubmit={sendEmail} className="mb-4 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-900 hover:bg-green-700 focus:bg-green-500">
                            提交
                        </button>
                    </form>
                </div>
            </section>
            )}
        </Layout>
    );
};

export default contactForm;