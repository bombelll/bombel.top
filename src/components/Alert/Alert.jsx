import { toast } from "react-hot-toast";

const Alert = () => {

    setTimeout(() => {
        const toastId = 'alertToast'

        toast('The site may contain errors.\n\If you see them, please report them to me!', {
            id: toastId,
            duration: 3000,
            style: {
                textAlign: "center",
                backgroundColor: "#eee",
                fontSize: "1.3rem",
                fontWeight: "bold"
            }
          });
    }, 1500);

    return null;
};

export default Alert;
