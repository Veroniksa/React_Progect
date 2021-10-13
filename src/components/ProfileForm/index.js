//ref получение ссылки на бд
//и необходима для других методов, который предоставляет этот модуль

// onValue подписка на события изменения значения в бд
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { userChange, userNameChange } from "../../store/profile/action";

export const ProfileForm = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  //set(работает почти так же как и ref)
  //первым аргументом передаем ссылку на объект бд
  //вторым аргументом передаем значение, которое хотим туда записать

  //snapshot снимок состояния бд

  //получение ссылки на db(воторой аргумент конретный раздел,
  // который будет создан при добавлении данных)
  //при каки-то изменених в разделе(user) будет вызовиться callback
  //и туда передастся весь snapshot всего пользователя
  //следовательно после изменения записываем все в setName
  //будет создан объект со свойством username

  //когда snapshot пуст = null

  useEffect(() => {
    /* const userDbRef = ref(db, "user");
    onValue(userDbRef, (snapshot) => {
      const data = snapshot.val();
      console.log('-----------', data);
      setName(data?.username || '');
    }); */
    dispatch(userChange(name));
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    setValue("");
    dispatch(userNameChange(value));
  };

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onClick={handelSubmit}>
        <TextField 
        type="text" 
        value={value} 
        onChange={handelChange}
        label="Write your name" />
        <Button variant="outlined" disabled={!value}>Submit</Button>
      </form>
    </>
  );
};
