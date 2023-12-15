import classes from './CheckoutForm.module.css'
import { useForm } from "react-hook-form";

const CheckoutForm = (createOrder) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 

  return (
    <section className={classes.container}>
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <div className={classes.inputs}>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Required</span>}
      </div>

      <div className={classes.inputs}>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" {...register("phone", { required: true })} />
        {errors.phone && <span>Required</span>}
      </div>

      <div className={classes.inputs}>
        <label htmlFor="example">Email</label>
        <input type="email" defaultValue="@" {...register("example")} />
      </div>
      
      <button onSubmit={createOrder} className={classes.orden}>Create order</button> 

    </form>
    </section>
  );
}

export default CheckoutForm;