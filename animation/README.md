# Framer Motion

## Simple animations

- 전환 (Transitions)

  - 기본적으로 모션은 애니메이션이 적용되는 값의 유형에 따라 빠른 전환에 적합한 애니메이션을 생성한다.
  - 예를 들어, 스프링 시뮬레이션을 통해 `x`나 `scale`과 같은 물리적 속성에 애니메이션을 적용되며,  
     반면 `opacity`나 `color`과 같은 값은 트윈으로 애니메이션을 적용합니다.

  ```jsx
  <motion.div animate={{ x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />
  ```

- 모션 컴포넌트를 처음 만들 때 스타일 또는 이니셜에 정의된 값과 다른 경우 애니메이션의 값에 따라 자동으로 애니메이션이 적용되며,
  초기 소품을 false로 설정하여 애니메이션 입력을 비활성화할 수 있다.

```jsx
<motion.div animate={{ x: 100 }} initial={false} />
```

- React에서는 컴포넌트가 트리에서 제거되면 즉시 제거되기에,
  모션은 컴포넌트가 종료 애니메이션을 실행하는 동안 DOM에 컴포넌트를 유지하기 위해 AnimatePresence 컴포넌트를 제공한다.

- Keyframes
  - 애니메이션의 값은 일련의 키프레임으로 설정할 수도 있습니다. 이렇게 하면 각 값에 순차적으로 애니메이션이 적용됩니다.

```jsx
<motion.div animate={{ x: [0, 100, 0] }} />
```
