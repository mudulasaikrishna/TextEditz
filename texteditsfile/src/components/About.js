import React from 'react'
import "./About.css"

export default function About(){
    return(
        <div className='fc'>
            <div className='boom'>
                <div>
                    <h4 className='miow'>About <strong>TextEditz</strong></h4>
                    <p className='parao'>Welcome to <strong>TextEditz</strong> – a simple, powerful, and fast tool for transforming and editing text!
                    <strong> TextEditz</strong> was developed as my first React project, and I created it to help make everyday 
                    text formatting tasks quick and easy. Whether you need to convert text to uppercase, lowercase, 
                    remove unnecessary spaces, or just copy your work with a single click, <strong>TextEditz</strong> is here to help.</p>
                </div>
                <div>
                    <h4 className='miow'>What is TextEditz?</h4>
                    <p className='parao'><strong>TextEditz</strong> is a free online tool that offers a variety of text manipulation options, allowing you to:</p>
                    <ul>
                        <li className='lao'><strong>Convert Text to Uppercase & Lowercase:</strong> Instantly change your text to uppercase or lowercase with one click. Whether 
                            you’re working on formatting or just need a quick case adjustment, TextEditz makes it easy.
                        </li>
                        <li className='lao'><strong>Copy Text:</strong> After transforming your text, simply click the "Copy" button to copy the text to your clipboard and use it wherever you need.
                        </li>
                        <li className='lao'><strong>Clear Text:</strong> Need a clean slate? The "Clear" button allows you to quickly remove all text from the input box and start fresh.
                        </li>
                        <li className='lao'><strong>Remove Whitespace:</strong>Remove Whitespace: Clean up your text by removing unwanted spaces. Whether it’s extra spaces between words or unnecessary trailing spaces, TextEditz helps you make your text neat and professional.
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='miow'>Why TextEditz?</h4>
                    <ul>
                        <li className='lao'><strong>Simple & Intuitive:</strong>Simple & Intuitive: Built with simplicity in mind, TextEditz offers a clean, user-friendly interface. You don’t need to be a tech expert to use it — just type or paste your text, and the tool does the rest.
                        </li>
                        <li className='lao'><strong>Fast & Efficient:</strong> Fast & Efficient: Text transformation happens in real-time. There's no waiting for slow processing or complicated settings. Just click a button, and your text is transformed instantly.
                        </li>
                        <li className='lao'><strong>Free & Accessible:</strong> TextEditz is completely free to use and accessible online. There's no need to sign up, install anything, or pay for premium features. Simply visit the website, and you're ready to go.
                        </li>
                        <li className='lao'><strong>Built with Modern Web Technologies:</strong> TextEditz was developed using HTML, CSS, JavaScript, and React. This project was my first experience with React, and I’ve learned a lot in building it. My goal was to create a tool that is not only useful but also responsive and fast, taking full advantage of React's component-based structure and state management.
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='miow'>Features at a Glance:</h4>
                    <ul>
                        <li className='lao'><strong>Convert Text:</strong> Uppercase → Lowercase/Lowercase → Uppercase
                        </li>
                        <li className='lao'><strong>Copy:</strong> One-click text copy to clipboard
                        </li>
                        <li className='lao'><strong>Clear:</strong> Quickly remove all text from the input box
                        </li>
                        <li className='lao'><strong>Whitespace Removal:</strong> Automatically remove unwanted spaces
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='miow'>Why I Built TextEditz</h4>
                    <p className='parao'>As a beginner in React, I wanted to create something simple yet practical — a tool that would solve a real problem and help me learn new concepts at the same time.
                    <strong>TextEditz</strong> is my way of improving my React skills while creating a project that could be genuinely useful to people.<br/>
                    If you're looking for a quick and easy way to format text or remove unwanted spaces, <strong>TextEditz</strong> is here to help. I hope you find it useful, and I appreciate you visiting the site!</p>
                </div>
                <div>
                    <h4 className='miow'>Try It Out</h4>
                    <p className='parao'>Ready to give it a try? Whether you're formatting a document, cleaning up a list of text, or converting words from uppercase to lowercase, <strong>TextEditz</strong> will make your task simpler and faster. Just paste or type your text, and click the buttons to see the magic happen!<br/>
                    Thank you for using <strong>TextEditz,</strong> and stay tuned for future updates!</p>
                </div>
            </div>
        </div>
    )
}
