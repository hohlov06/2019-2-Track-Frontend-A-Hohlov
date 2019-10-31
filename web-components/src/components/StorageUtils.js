function idFromName(name, prefix) {
  if ((typeof name !== 'string')
    || (name.length < prefix.length + 1)
    || (name.slice(0, prefix.length) !== prefix))
    return false;
  let id = name.slice(prefix.length);
  id = Number(id);
  if (Number.isNaN(id))
    return false;
  return id;
}

function nameFromId(id, prefix) {
  if (id === null)
    return false;
  const idNumber = Number(id);
  if (!Number.isInteger(idNumber))
    return false;
  return prefix + idNumber;
}

export function chatStorageKey(id) {
  return nameFromId(id, 'chat_');
}

export function chatId(name) {
  return idFromName(name, 'chat_');
}

// export function profileStorageKey(id) {
//   return nameFromId(id, 'profile_');
// }
//
// export function profileId(name) {
//   return idFromName(name, 'profile_');
// }

function generateIdByKey(storageKey) {
  let newId = 1;
  try {
    const itemList = JSON.parse(localStorage.getItem(storageKey));
    const maxId = Math.max(...Object.keys(itemList).map((item) => Number(item)));
    if (!Number.isInteger(maxId))
      throw new Error('id is not integerable in local storage');
    newId = maxId + 1;
  } catch (e) {
    localStorage.clear()
    throw e;
  }
  return newId;
}

export function generateChatId() {
  return generateIdByKey('chats');
}

export function generateProfileId() {
  return generateIdByKey('profiles');
}

export function hoursMinutes(time) {
  let minutes = time.getMinutes();
  if (minutes < 10)
    minutes = `0${minutes}`;
  return `${time.getHours()}:${minutes}`;
}

export function currentHoursMinutes() {
  return hoursMinutes((new Date()));
}

export const myProfileId = '1';
//console.log(chatStorageKey(1));
//console.log(chatId('c1'));
