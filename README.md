<div align="center">
        <a href="https://react-hook-form.com" title="React Hook Form - Simple React forms validation">
            <img src="https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" />
        </a>
</div>

### Install

    npm install @hookform/core

### Quickstart

```jsx
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('firstName')} />
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}
```

<a href="https://ui.dev/bytes/?r=bill">
  <img src="https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/ads-1.jpeg" />
</a>

### Sponsors

Thanks go to these kind and lovely sponsors!

<a
    target = _blank
    href = 'https://wantedlyinc.com'
/>
<img
        width = 94
        src = 'https://images.opencollective.com/wantedly/d94e44e/logo/256.png'
    />
</a>
<a
    target = _blank
    href = 'https://graphcms.com'
/>
<img
        width = 94
        src = 'https://avatars.githubusercontent.com/u/31031438'
    />
</a>
<a
    target = _blank
    href = 'https://kanamekey.com'
/>
<img
        width = 94
        src = 'https://images.opencollective.com/kaname/d15fd98/logo/256.png'
    />
</a>
<a
    target = _blank
    href = 'https://formcarry.com/'
/>
<img
        width = 94
        src = 'https://images.opencollective.com/formcarry/a40a4ea/logo/256.png'
    />
</a>

### Backers

Thanks go to all our backers! [[Become a backer](https://opencollective.com/react-hook-form#backer)].

<a href="https://opencollective.com/react-hook-form#backers">
    <img src="https://opencollective.com/react-hook-form/backers.svg?width=950" />
</a>

### Contributors

Thanks go to these wonderful people! [[Become a contributor](CONTRIBUTING.md)].

<a href="https://github.com/react-hook-form/react-hook-form/graphs/contributors">
  <img src="https://opencollective.com/react-hook-form/contributors.svg?width=890&button=false" />
</a>
