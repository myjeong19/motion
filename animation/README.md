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

  - 애니메이션의 값은 일련의 키프레임으로 설정할 수도 있습니다. 이렇게 하면 각 값에 순차적으로 애니메이션이 적용된다.

    ```jsx
    <motion.div animate={{ x: [0, 100, 0] }} />
    ```

    - 와일드카드 키프레임인 null을 전달하여 현재 값을 초기 키프레임으로 사용할 수 있다.  
      이렇게 하면 값이 현재 애니메이션 중인 상태에서 키프레임 애니메이션이 시작되면 전환이 더 자연스러워지고, 또한 코드의 중복을 줄일 수 있다.

    ```jsx
    <motion.div animate={{ x: [null, 100, 0] }} />
    ```

- 각 키프레임은 애니메이션 전체에 걸쳐 균일한 간격으로 배치됩니다. `transition`을 통해 `times` 옵션을 설정하여 이를 재정의할 수 있다.
  - times는 키프레임 배열과 동일한 길이의 배열로, 0과 1 사이의 숫자로 애니메이션에서 각 키프레임을 누를 위치를 정의한다.

```jsx
<motion.circle cx={500} animate={{ cx: [null, 100, 200] }} transition={{ duration: 3, times: [0, 0.2, 1] }} />
```
