# SAITOUR Image Guide

홈페이지 이미지는 `public/images` 폴더에서 관리합니다.

같은 파일명으로 이미지만 교체하면 코드 수정 없이 홈페이지에 반영됩니다.

## 기본 규칙

- 외부 이미지 URL은 사용하지 않습니다.
- 이미지는 모두 `public/images` 안에 넣습니다.
- 파일명은 아래 기준과 정확히 같아야 합니다.
- 권장 비율은 가로형 `16:9`입니다. 예: `1920x1080`, `1600x900`, `1200x675`
- 권장 파일 형식은 `.jpg`입니다.
- 사진 비율이 조금 달라도 홈페이지에서는 자동으로 영역에 맞춰 표시됩니다.
- 카드 이미지는 빈 공간 없이 꽉 차게 표시되고, 클릭해서 크게 볼 때는 사진 전체가 보이도록 처리됩니다.

## Hero 이미지

폴더:

```text
public/images/hero
```

파일:

```text
hero-main.jpg
```

교체 방법:

1. `public/images/hero` 폴더로 이동
2. 기존 `hero-main.jpg` 삭제 또는 백업
3. 새 사진 이름을 `hero-main.jpg`로 변경
4. 붙여넣기
5. 홈페이지 새로고침

## 대표 서비스 이미지

폴더:

```text
public/images/services
```

파일명:

```text
dmz.jpg
seoul-city.jpg
airport-transfer.jpg
corporate-events.jpg
private-tour.jpg
guide-service.jpg
```

예시: DMZ 서비스 사진 교체

1. `public/images/services` 폴더로 이동
2. 기존 `dmz.jpg` 삭제 또는 백업
3. 새 DMZ 사진 이름을 `dmz.jpg`로 변경
4. 붙여넣기
5. 홈페이지 새로고침

## 현장에서 만나는 사이투어 이미지

폴더:

```text
public/images/gallery
```

현재 홈페이지 표시 순서:

```text
gallery01.jpg  -> DMZ
gallery02.jpg  -> 서울
gallery03.jpg  -> 공항픽업
gallery04.jpg  -> 기업행사
gallery05.jpg  -> 가이드
```

예시: DMZ 사진 교체

1. `public/images/gallery` 폴더로 이동
2. 기존 `gallery01.jpg` 삭제 또는 백업
3. 새 DMZ 사진 이름을 `gallery01.jpg`로 변경
4. 붙여넣기
5. 홈페이지 새로고침

사진은 자동으로 카드 영역에 맞춰 표시됩니다. PC, 태블릿, 모바일 모두 같은 방식으로 적용됩니다.

## About 이미지

폴더:

```text
public/images/about
```

파일:

```text
about-main.jpg
```

## Fallback 이미지

이미지가 없거나 깨졌을 때 아래 기본 이미지가 자동으로 표시됩니다.

```text
public/images/common/fallback.jpg
```

이 파일은 삭제하지 마세요.

## 전체 폴더 구조

```text
public/images
├─ hero
│  └─ hero-main.jpg
├─ services
│  ├─ dmz.jpg
│  ├─ seoul-city.jpg
│  ├─ airport-transfer.jpg
│  ├─ corporate-events.jpg
│  ├─ private-tour.jpg
│  └─ guide-service.jpg
├─ about
│  └─ about-main.jpg
├─ gallery
│  ├─ gallery01.jpg
│  ├─ gallery02.jpg
│  ├─ gallery03.jpg
│  ├─ gallery04.jpg
│  └─ gallery05.jpg
└─ common
   └─ fallback.jpg
```
