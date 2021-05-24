import styles from './loading-form.module.css'

export default function LoadingForm(){
    return (
        <div className = "w-full d-flex justify-content-center">
            <div className = {styles.loader}></div>
        </div>
    )
}