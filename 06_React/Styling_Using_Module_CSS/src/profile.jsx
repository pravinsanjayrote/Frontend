import style from "./MyCss/profile.module.css";
function Profile() {
  return (
    <>
      <h1 className={style.heading}>Your profile renders here!!!</h1>
      <div className={style.parentDiv}>
        <div className={style.mainDiv}>
          <div>
            <img src="src\assets\vite.svg" alt="" className={style.myimg} />
          </div>
          <div className={style.personalDetail}>
            <h4>Priyanka</h4>
            <h3>Software Developer</h3>
          </div>
        </div>

        <div className={style.mainDiv}>
          <div>
            <img src="src\assets\vite.svg" alt="" className={style.myimg} />
          </div>
          <div className={style.personalDetail}>
            <h4>Priyanka</h4>
            <h3>Software Developer</h3>
          </div>
        </div>

        <div className={style.mainDiv}>
          <div>
            <img src="src\assets\vite.svg" alt="" className={style.myimg} />
          </div>
          <div className={style.personalDetail}>
            <h4>Priyanka</h4>
            <h3>Software Developer</h3>
          </div>
        </div>

        <div className={style.mainDiv}>
          <div>
            <img src="src\assets\vite.svg" alt="" className={style.myimg} />
          </div>
          <div className={style.personalDetail}>
            <h4>Priyanka</h4>
            <h3>Software Developer</h3>
          </div>
        </div>

        <div className={style.mainDiv}>
          <div>
            <img src="src\assets\vite.svg" alt="" className={style.myimg} />
          </div>
          <div className={style.personalDetail}>
            <h4>Priyanka</h4>
            <h3>Software Developer</h3>
          </div>
        </div>

        <div className={style.mainDiv}>
          <div>
            <img src="src\assets\vite.svg" alt="" className={style.myimg} />
          </div>
          <div className={style.personalDetail}>
            <h4>Priyanka</h4>
            <h3>Software Developer</h3>
          </div>
        </div>

      </div>
    </>
  );
}
export default Profile;