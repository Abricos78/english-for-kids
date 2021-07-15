import { Auth, Category, Word } from './interface';

const url = 'http://localhost:3030/';

export async function getCategoriesAPI(): Promise<Category[]> {
  const response = await fetch(url);
  return response.json();
}

export async function getWordsAPI(categoryName: string): Promise<Word[]> {
  const response = await fetch(`${url}api/categories/${categoryName}`);
  return response.json();
}

export async function getAllWordsAPI(): Promise<Word[]> {
  const response = await fetch(`${url}api/statistics/`);
  return response.json();
}

export async function updateStatisticAPI(word: Word): Promise<Word[]> {
  const response = await fetch(`${url}api/statistics/`, {
    method: 'PUT',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(word),
  });
  return response.json();
}

export async function resetWordsAPI(): Promise<Word[]> {
  const response = await fetch(`${url}api/statistics/`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function getDifficultWordsAPI(): Promise<Word[] | []> {
  const response = await fetch(`${url}api/difficult/`);
  return response.json();
}

export async function getAuthAPI(): Promise<Auth> {
  const response = await fetch(`${url}api/auth/`);
  return response.json();
}

export async function createCategoryAPI(data: Record<string, string>): Promise<Category[]> {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteCategoryAPI(name: string): Promise<Category[]> {
  const response = await fetch(`${url}${name.toLowerCase()}`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function updateCategoryAPI(name: string, newName: string): Promise<Category[]> {
  const data = {
    name: name.toLowerCase(),
    newName: newName.toLowerCase(),
  };
  const response = await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteWordAPI(categoryName: string, name: string): Promise<Word[]> {
  const response = await fetch(`${url}api/categories/${categoryName}/${name}`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function updateWordAPI(categoryName: string, data: Record<string, string>): Promise<Word[]> {
  const response = await fetch(`${url}api/categories/${categoryName}`, {
    method: 'PUT',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function createWordAPI(categoryName: string, data: Record<string, string>): Promise<Word[]> {
  const response = await fetch(`${url}api/categories/${categoryName}`, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}
