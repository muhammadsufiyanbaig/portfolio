const Contact = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12" id="contact">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 h-full">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Get in touch
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        Thank you for taking the time to visit my portfolio. Whether you have a project in mind,
                        want to collaborate, or simply want to say hello, I did love to hear from you.Thank you for
                        considering me for your projects or for reaching out to connect. I am excited to start a
                        conversation with you!
                    </p>
                </div>
                {/* text - end */}
                {/* form - start */}
                <form action="mailto:send.sufiyan@gmail.com" className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first-name"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            First name*
                        </label>
                        <input
                            name="first-name"
                            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="last-name"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Last name*
                        </label>
                        <input
                            name="last-name"
                            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="company"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Company
                        </label>
                        <input
                            name="company"
                            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Email*
                        </label>
                        <input
                            name="email"
                            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="subject"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Subject*
                        </label>
                        <input
                            name="subject"
                            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Message*
                        </label>
                        <textarea
                            name="message"
                            className="h-25 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
                            defaultValue={""}
                        />
                    </div>
                    <div className="flex items-center justify-between sm:col-span-2">
                        <button className="inline-flex justify-items-center text-black-100 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg hover:text-white">
                            Send
                        </button>
                        <span className="text-sm text-gray-500">*Required</span>
                    </div>
                </form>
                {/* form - end */}
            </div>
        </div>

    )
}
export default Contact;
