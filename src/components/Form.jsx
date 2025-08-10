export function ContactForm() {
    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="fullname-input">What is your full name?</label>
                <input type="text" name="fullName" id="fullname-input" placeholder="First name Last name"/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="email-input">Enter your email address</label>
                <input type="text" name="email" id="email-input" placeholder="email@example.com" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="subject-dropdown">Select the topic of your message</label>
                <select name="subjects" id="subject-dropdown">
                    <option value="subject-option">Hardware</option>
                    <option value="software-issues">Software</option>
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="message">Write a message</label>
                <textarea name="message" id="message" placeholder="a detailed description of your problem"></textarea>
            </div>
        </form>
    )
}