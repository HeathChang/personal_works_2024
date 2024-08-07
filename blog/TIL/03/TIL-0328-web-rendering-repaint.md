# 03.28 Web Rendering - Paint, Repaint

## 질문:

- 페인트, 리페인트는 각각 무엇이고 차이점은 무엇인가?
- 이후, 어떤 작업이 발생하는가?


## 페인트:
```
그래픽을 새로 그리는 작업을 의미합니다.
요소의 스타일이 변경되었거나 새로운 요소가 추가되어 그래픽 요소를 생성하는 경우에 발생.
e.g) 배경 색상이 변경되거나 텍스트의 내용이 업데이트되는 경우에 페인트가 발생.
요소의 레이아웃이 변경되지 않고 시각적인 변화만 있는 경우에 발생

```



## 리페인트(Repaint):
```
이미 화면에 그려진 요소의 그래픽을 다시 그리는 작업을 의미.
요소의 스타일이 변경되어 요소의 외관이 변경되었을 때 발생.
e.g) 요소의 투명도가 변경되거나 가려져 있던 요소가 다시 보이게 되는 경우에 리페인트가 발생.
단지 요소의 스타일이 변경된 경우에 발생하므로, 리플로우보다 비용이 적음. (리페인트 < 리플로우)
```

## 차이:

```
페인트는 요소의 새로운 그래픽을 그리는 작업을 의미
리페인트는 이미 그려진 그래픽을 다시 그리는 작업을 의미.
이러한 작업들은 레이아웃 변경과는 관련이 있지만, 주로 요소의 스타일이 변경되었을 때 발생.
```


## 합성(Compositing):
```
합성 단계에서는 페인트 작업에서 생성된 그래픽들을 합성하여 최종 화면을 생성.
이 단계에서는 각 요소의 위치, 투명도, 불투명도 등을 고려하여 요소들을 겹치게 하거나 블렌딩.
또한, 각 요소의 레이어(Layer)를 합성하여 최종 화면을 생성.
이때 각 요소마다 하나의 레이어가 생성되지는 않을 수 있고, 여러 개의 요소가 하나의 레이어에 합성되기도함.
```



## 답변:

### Q. 레이아웃 계산 | 리플로우 이후 대체 어떤 일이 발생하는가?
- 페인트 | 리페인트

### Q. 페인트, 리페인트는 각각 무엇이고 차이점은 무엇인가?
- 화면에 요소를 그리는 과정으로, 초기에 그리는지 아니면 변경하는 것인지의 차이
 
 


