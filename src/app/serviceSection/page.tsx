import React from 'react'
import styles from './servicesSection.module.scss'

export default function ServiceSection() {
  return (
    <div className={styles.page}>
        <h1>Our Services</h1>
<div className={styles.container}>

    <div className={styles.serviceList}>
        {/*Graphic Design*/}
        <div className={styles.service}>
            <div className={styles.top}>
            <h4>Graphic Design</h4>
            </div>
            <div className={styles.icon}>
                Image
            </div>
            <div className={styles.info}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi hic veritatis ex, nihil nisi labore a optio et quibusdam iusto minima impedit, minus provident magni dignissimos non illum totam vero?</p>
            </div>
            <div className={styles.learn}>
                <button>Learn More</button>
            </div>
        </div>

    {/*Brand Design*/}
    <div className={styles.service}>
            <div className={styles.top}>
            <h4>Brand Design</h4>
            </div>
            <div className={styles.icon}>
                Image
            </div>
            <div className={styles.info}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi hic veritatis ex, nihil nisi labore a optio et quibusdam iusto minima impedit, minus provident magni dignissimos non illum totam vero?</p>
            </div>
            <div className={styles.learn}>
                <button>Learn More</button>
            </div>
    </div>

     {/*Brand Design*/}
    <div className={styles.service}>
            <div className={styles.top}>
            <h4>Graphic Design</h4>
            </div>
            <div className={styles.icon}>
                
                Image
            </div>
            <div className={styles.info}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi hic veritatis ex, nihil nisi labore a optio et quibusdam iusto minima impedit, minus provident magni dignissimos non illum totam vero?</p>
            </div>
            <div className={styles.learn}>
                <button>Learn More</button>
            </div>
        </div>

 {/*Brand Design*/}
    <div className={styles.service}>
            <div className={styles.top}>
            <h4>Brand Design</h4>
            </div>
            <div className={styles.icon}>
                Image
            </div>
            <div className={styles.info}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi hic veritatis ex, nihil nisi labore a optio et quibusdam iusto minima impedit, minus provident magni dignissimos non illum totam vero?</p>
            </div>
            <div className={styles.learn}>
                <button>Learn More</button>
            </div>
    </div>

</div>

    

</div>
</div>
  )
}
