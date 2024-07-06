import Template from "./Template"
 
export default function SignUp({handleLogin}) {
    return (
        <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image="/i2.png"
        formType="signup"
        handleLogin={handleLogin}
        />
    )
}