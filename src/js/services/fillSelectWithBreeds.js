import SlimSelect from 'slim-select';
import { SelectBreeds } from '../querrySelectors';
import { fetchBreeds } from './catApi';

const fillSelectWithBreeds = async () => {
  const data = await fetchBreeds();
  if (!data) {
    return;
  }
  SelectBreeds.innerHTML = '<option value=""></option>';
  data.forEach(breed => {
    const optionElement = document.createElement('option');
    optionElement.value = breed.id;
    optionElement.textContent = breed.name;
    SelectBreeds.appendChild(optionElement);
  });
  new SlimSelect({ select: '#breed-select' });
  SelectBreeds.classList.remove('is-hidden');
};

export default fillSelectWithBreeds;
