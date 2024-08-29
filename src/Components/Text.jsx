import { useTranslation } from "react-i18next"

function Text() {
    const { t } = useTranslation();

    const greeting = t("greeting");
    const { title, description } = t("description", {
        dynamic: "(Dynamic Practice)",
    });

    return (
        <div className="bg-slate-700 p-[30px] w-[700px] rounded-lg">
            <h2 className="font-bold text-[36px] text-orange-600"> {greeting} </h2>
            <h2 className="font-bold text-[30px] mt-4"> {title} </h2>
            <p className="font-semibold text-[18px] mt-4 leading-tight"> {description} </p>
        </div>
    )
}

export default Text
