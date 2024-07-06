import Template from "./Template"

export default function Login({handleLogin}) {
    return (
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education to future-proof your career."
        image="/i1.png"
        formType="login"
        handleLogin={handleLogin}
        />
    )
}