# Web Rendering & Vue 작용
## 질문:

#### 1. Web Browser Rendering 과정에서, 랜더링 트리 생성후 어떤일이 발생해?
#### 2. 이 과정에서 Vue, React와 같은 SPA Framework는 언제, 그리고 어떻게 작동할까(Virtual DOM & Vue Rendering )?




## Web Browser 작동원리:

### 문서 파싱 (Document Parsing) > Output: 돔트리 생성:
```
사용자가 URL을 입력하거나 링크를 클릭하여 웹 페이지를 요청하면, 브라우저는 해당 페이지의 HTML 문서를 서버로부터 받아옵니다.
브라우저는 받아온 HTML 문서를 파싱하여 DOM (Document Object Model) 트리를 생성합니다. DOM은 HTML 문서의 구조를 표현하는 트리 구조로, 각 요소(Element)는 노드(Node)로 표현됩니다.
```
### 스타일 계산 (Style Calculation) > Output: CSSOM 생성:
```
브라우저는 CSS 파일과 style 태그 내의 스타일 정보를 파싱하여 CSSOM (CSS Object Model) 트리를 생성합니다. CSSOM은 CSS의 규칙을 표현하는 트리 구조입니다.
```

### 랜더링 (Rendering)  > Output: Render Tree 생성:
```
DOM과 CSSOM을 결합하여 렌더링 트리(Render Tree)를 생성합니다. 렌더링 트리는 화면에 실제로 표시될 요소들의 집합을 나타냅니다.
레이아웃(리플로우) (Layout) > Output: 각 요소의 크기와 위치 계산:
브라우저는 렌더링 트리를 기반으로 각 요소의 크기와 위치를 계산합니다. 이를 레이아웃 또는 리플로우(reflow)라고 합니다.
요소의 크기와 위치는 브라우저의 뷰포트(Viewport) 크기, CSS의 박스 모델(Box Model), 포지셔닝(Positioning) 등을 고려하여 계산됩니다.
```


### 페인팅 (Painting) > Output: 배경색, 텍스트 등 표시:
```
브라우저는 레이아웃이 결정된 후, 화면에 각 요소를 그립니다. 이를 페인팅이라고 합니다.
각 요소는 배경색, 텍스트, 이미지 등의 내용을 가지고 있으며, 이를 화면에 그려서 사용자에게 표시합니다.
```

### 합성 (Compositing) > Output: 최종 화면:
```
브라우저는 페인팅된 요소들을 계층별로 합성하여 최종 화면을 생성합니다.
```




## Virtual DOM:
```
가벼운 복사본으로, 메모리에 존재하는 가상의 트리 구조
Virtual DOM 생성은 문서 파싱과 DOM 트리 구성 이후에 발생
```


## Virtual Dom 생성 과정:

### 문서 파싱(Document Parsing) 및 DOM 트리 구성:
```
사용자가 Vue 애플리케이션에 접속하면, 브라우저는 해당 페이지의 HTML 문서를 서버로부터 요청하고 받아옵니다.
HTML 문서의 로드가 완료되면, 브라우저는 해당 HTML 문서를 파싱하여 DOM (Document Object Model) 트리를 생성합니다.
DOM 트리는 HTML 문서의 구조를 표현하는 트리 구조로, 각 요소(Element)는 노드(Node)로 표현됩니다.
```

### Virtual DOM 생성:
```
Vue 애플리케이션은 초기화되고 Vue 인스턴스가 생성됩니다.
Vue는 템플릿을 컴파일하여 Virtual DOM을 생성합니다.
Virtual DOM은 실제 DOM을 추상화한 가상의 트리 구조입니다. Vue는 이를 사용하여 실제 DOM 조작을 최소화하고 효율적으로 UI를 업데이트합니다.

```



## Vue Rendering:
```
사용자 인터페이스(UI)를 생성하고 업데이트하는 과정을 의미합니다
Vue Rendering 브라우저의 렌더링 과정 중 "페인팅(Paint)" 단계에서 발생(페인팅은 화면에 각 요소를 그리는 과정)
```


## Vue Rendering 과정:

### 상태 변화 감지 및 가상 DOM 업데이트:
```
사용자 인터랙션 또는 데이터의 상태 변화가 발생하면, Vue는 이를 감지하고 상태 변화에 따라 가상 DOM을 업데이트.
이 과정에서 Vue는 효율성을 위해 가상 DOM의 변경 사항을 최적화해 실제 DOM에 반영되지 않는 불필요한 변경 사항은 제거.
```

### 가상 DOM과 실제 DOM 비교(Reconciliation):
```
데이터의 변경이 발생하면 Vue는 가상 DOM과 실제 DOM을 비교하여 변경된 부분을 식별합니다.
이를 통해 실제 DOM 조작을 최소화하고 성능을 향상시킵니다.
```

### 실제 DOM에 변경 사항 적용:
```
가상 DOM의 변경 사항이 확정되면, Vue는 이를 실제 DOM에 적용해, 실제 DOM 조작이 최소화되어 성능 향상.
변경된 부분만을 효율적으로 업데이트하여 페이지의 리프레시나 리로드 없이 사용자에게 변경 사항을 반영.
```

### 페인팅(Painting) 단계:
```
Vue가 실제 DOM에 변경 사항을 적용하면, 브라우저는 화면에 변경된 내용을 그리는 페인팅 단계로 이동.
브라우저는 변경된 요소들을 화면에 페인팅하고, 사용자에게 업데이트된 화면을 노출.
```


## 결론:

### Web Rendering 과정에서, 랜더링 트리 생성후 어떤일이 발생해?
```
랜더링 트리 생성 이후, 리플로우 (레이아웃) 과 페인팅 과정을 동해 비어있는 index.html 를 채워 넣음
```

### Web Browser 랜더링 과정에서 Vue, React와 같은 SPA Framework는 언제, 그리고 어떻게 작동하지?
```
1. 문서 파싱:Web Browser 랜더링 과정에서 문서파싱, 즉 DOM 트리 구성을 마치고, HTML 문서에 포함되어 있는 Vue 애플리케이션 구동을 하여, Vue 인스턴스 초기화 > 가상 DOM 생성 > 템플릿 컴파일 > 가상 DOM 초기화 과정을 통해 초기 상태를 설정 (Virtual DOM 생성)
2. 페인팅 과정:이후, 변화가 발생되면, Vue는 가상 DOM과 실제 DOM을 비교하여 변경된 부분을 식별하여, 변경이 발생된 부분에 Vue Rendering을 통해 UI를 업데이트
```