import styles from './wrapper.module.css'
export function Slider({user}){
     const [id,email,first_name,last_name,avatar]=user
    return (
        < div className={styles.parent}>
             {
                user.map(ele => (
                    <div className={styles.child}>
                       <p>{` id-${ele.id}`}</p>
                       <p>{` email-${ele.email}`}</p>
                       <p>{` Name- ${ele.first_name} ${ele.last_name}`}</p>
                       <img src={ele.avatar}/>
                        </div>
                ))
            }
            
           
        </  div >
    )
}