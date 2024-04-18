

## Same-Origin (동일 출처)
### 정의:
- Same-Origin은 두 리소스(페이지 또는 스크립트 등)의 출처(Origin)가 동일한 경우.
- Origin는 프로토콜(예: http, https), 호스트(도메인), 포트 번호가 전부 동일.

### 예시: 
```
https://example.com/page1 와 https://example.com/page2
http://subdomain.example.com 와 http://subdomain.example.com
https://example.com:8080 와 https://example.com:8080
```
## Cross-Origin (다른 출처)
### 정의:
- Cross-Origin은 두 리소스의 출처(Origin) 가 다른 경우.
- Origin이 하나라도 프로토콜(예: http, https), 호스트(도메인), 포트 번호 중 하나가 상이.

### 예시:

```
https://example.com 와 https://api.example.com > 호스트 상이
https://example.com 와 http://example.com > 프로토콜 상이
https://example.com 와 https://example.com:8080 > 포트 상이

```



## Same-Site (동일 사이트)
### 정의:
- Same-Site은 쿠키의 SameSite 속성,
- 이 속성을 사용하여 쿠키가 동일한 출처에서만 전송되도록 제어.
### 동작: 
Same-Site 쿠키는 동일 출처(Origin) 간의 요청에서만 전송됩니다.
### 예시: 
Same-Site 쿠키를 사용하여 동일한 출처 간의 요청에서만 쿠키가 전송되도록 제한

## Cross-Site (다른 사이트)
### 정의:
- Cross-Site는 다른 출처(Origin) 간의 요청.
- 웹 보안에서는 Cross-Site 요청을 특별하게 다루어야 하며, 일부 제한된 상황에서만 Cross-Site 요청을 허용 가능함.

### 예시: 다른 출처 간의 요청을 실행할 때 Cross-Site 요청이 발생합니다.
Cross-Site Scripting (XSS): 다른 출처의 스크립트가 주어진 출처에서 실행될 때 발생
Cross-Site Request Forgery (CSRF): 다른 출처에서의 사용자 요청이 사용자의 인증 정보를 사용하여 실행될 때 발생


## 관계
### 1. Same-Origin vs. Cross-Origin:
- Same-Origin은 출처가 동일할 때를 말하고, Cross-Origin은 출처가 다를 때를 말합니다. Same-Origin은 보안 정책인 동일 출처 정책(Same-Origin Policy)을 위해 중요한 개념입니다.
### 2. Same-Site vs. Cross-Site:
- Same-Site은 쿠키의 동작을 제어하여 동일 출처 간의 요청에서만 쿠키를 전송하도록 하는 보안 기능입니다.
- Cross-Site는 다른 출처 간의 요청을 나타내며, 보안 취약점을 방지하기 위해 특별한 주의가 필요합니다.


