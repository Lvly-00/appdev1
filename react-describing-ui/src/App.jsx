
import './App.css'

function Profile() {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_Mg1SUJNGG7paEiyiBWizP7ecGlh3_IfDcgkMQhU3tDuXzpce77l8_-EoP_jbDKTCbw&usqp=CAU"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
