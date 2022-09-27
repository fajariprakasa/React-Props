// definisi react compoent
// function atau class yang mereturn element JSX
// 1. Nama Function / class harus dimulai dengan huruf kapital
// 2. Hanya bisa mereturn 1 parent element JSX
// 3. Bisa terdapat props dan state
// 4. Bisa dipanggil di komponen lain dengan cara
// < NamaComponent />

import MyButton from './components/MyButton';
import CardUser from './components/CardUser';

export default function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-slate-100 p-6">
        <h1>Hello Components</h1>
        <MyButton
          content={'register'}
          bgColor={'bg-green-500'}
          onClick={() => {
            console.info('register clicked');
          }}
        />
        <MyButton
          content={'login'}
          bgColor={'bg-gray-400'}
          onClick={() => {
            console.info('login clicked');
          }}
        />
        <MyButton
          content={'logout'}
          bgColor={'bg-blue-600'}
          onClick={() => {
            console.info('logout clicked');
          }}
        />

        <CardUser
          image={
            'https://images.pexels.com/photos/5840867/pexels-photo-5840867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          }
          username={'fajariprakasa'}
          bod={'Jakarta, 16 November 1996'}
        />

        <CardUser
          image={
            'https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          }
          username={'destabayiii'}
          bod={'Jakarta, 16 November 1996'}
        />
      </div>
    </>
  );
}
