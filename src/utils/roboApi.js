const API_URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

export function getCurrentUser(user_id) {
  return fetch(`${API_URL}/userdata/${user_id}`, {
    method: 'GET',
    headers: generateHeaders(),
  }).then(checkResponse);
}

export function getPrices() {
  return fetch(`${API_URL}/prices`, {
    method: 'GET',
    headers: generateHeaders(),
  }).then(checkResponse);
}
export function getPaymentLink(id, amount, path) {
  return fetch(`${API_URL}/payment`, {
    method: 'POST',
    headers: generateHeaders(),
    body: JSON.stringify({
      user_id: id,
      amount,
      path,
      desc: 'test1',
    }),
  }).then(checkResponse);
}

export function setUserEmail(id, value) {
  return fetch(`${API_URL}/email_update`, {
    method: 'POST',
    headers: generateHeaders(),
    body: JSON.stringify({
      user_id: id,
      email: value,
    }),
  }).then(checkResponse);
}

export function setOptions(id, smart, care, domainId) {
  console.log(id, smart, care, domainId);
  return fetch(`${API_URL}/link_update`, {
    method: 'POST',
    headers: generateHeaders(),
    body: JSON.stringify({
      user_id: id,
      smart,
      care,
      domainId,
    }),
  }).then(checkResponse);
}

export function setRadioBalance(id, radioBalance) {
  return fetch(`${API_URL}/radioBalance_update`, {
    method: 'POST',
    headers: generateHeaders(),
    body: JSON.stringify({
      user_id: id,
      radioBalance,
    }),
  }).then(checkResponse);
}

function generateHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  };
}
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else Promise.reject(`Error: ${res.status}`);
}
