import React from 'react';
import Layout from '@theme/Layout';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './contactForm.css';
import emailjs from 'emailjs-com';

const serviceID = 'service_bw6rf5b';
const templateID = 'template_isj7757';
const templateParams = '';
const publicKey = '5r2tCrDs5VYOZxpfF';

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, formID, publicKey)
        .then((result) => {
            alert("您的留言已提交。 您現在可以離開此頁面。");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}
export default function Hello() {
    return (
        <Layout title="留言" description="留言">
 
                <div style={styles} >
                    <div className="formbold-main-wrapper" >
                        <div className="formbold-form-wrapper">
                            <form id="formID" onSubmit={sendEmail}>
                                <div className="formbold-mb-5">
                                    <label for="name" className="formbold-form-label"> 姓名 </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="您的姓名"
                                        className="formbold-form-input"
                                    />
                                </div>

                                <div className="formbold-mb-5">
                                    <label for="email" className="formbold-form-label">電郵地址</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="您的電子郵件地址"
                                        className="formbold-form-input"
                                    />
                                </div>

                                <div className="formbold-mb-5">
                                    <label for="subject" className="formbold-form-label"> 標題 </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="您留言的主旨"
                                        className="formbold-form-input"
                                    />
                                </div>

                                <div className="formbold-mb-5">
                                    <label for="message" className="formbold-form-label">信息</label>
                                    <textarea
                                        rows="6" cols="6"
                                        name="message"
                                        id="message"
                                        placeholder="您的留言"
                                        className="formbold-form-input"
                                    ></textarea>
                                </div>
                                {/* <div className="formbold-mb-5">
                                    <label for="message" className="formbold-form-label">信息</label>
                                    <input type="file" name="my_file" className="formbold-form-input"></input>
                                </div> */}

                                <div>
                                    <button className="formbold-btn">提交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
        </Layout>
    );
}
