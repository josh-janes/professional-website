---
title: 'TypeScript Tips for Better Code'
description: 'Essential TypeScript techniques and patterns to write safer, more maintainable code.'
date: '2025-09-01'
image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800'
tags: ['typescript', 'javascript', 'programming']
---

# TypeScript Tips for Better Code

TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are some essential tips to level up your TypeScript game.

## Use Strict Mode

Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

This enables all strict type-checking options and helps catch bugs early.

## Leverage Type Inference

TypeScript's type inference is powerful. Let it work for you:

```typescript
// No need to specify type here
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(n => n * 2)
```

## Use Union Types Effectively

Union types allow variables to be one of several types:

```typescript
type Status = 'idle' | 'loading' | 'success' | 'error'

function handleStatus(status: Status) {
  switch (status) {
    case 'loading':
      console.log('Loading...')
      break
    // TypeScript ensures all cases are handled
  }
}
```

## Generic Constraints

Use generic constraints for flexible yet type-safe functions:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: 'John', age: 30 }
const name = getProperty(user, 'name') // Type: string
```

## Utility Types

TypeScript provides powerful utility types:

```typescript
interface User {
  id: number
  name: string
  email: string
}

// Make all properties optional
type PartialUser = Partial<User>

// Make all properties required
type RequiredUser = Required<User>

// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>

// Omit specific properties
type UserWithoutEmail = Omit<User, 'email'>
```

## Type Guards

Create custom type guards for runtime type checking:

```typescript
interface Cat {
  meow(): void
}

interface Dog {
  bark(): void
}

function isCat(animal: Cat | Dog): animal is Cat {
  return 'meow' in animal
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow()
  } else {
    animal.bark()
  }
}
```

## Const Assertions

Use `as const` for literal types:

```typescript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
} as const

// config.apiUrl is type "https://api.example.com" not string
```

## Conclusion

These TypeScript patterns will help you write more robust and maintainable code. Remember, TypeScript is a tool to help you, not hinder you. Use it wisely!