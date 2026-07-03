# SAITOUR Contact Form Setup

사이투어 홈페이지 문의폼은 `mailto` 방식이 아니라 Next.js API Route와 Resend를 통해 서버에서 이메일을 발송합니다.

## 적용 구조

- 문의폼 컴포넌트: `components/ContactCTA.tsx`
- 이메일 발송 API: `app/api/contact/route.ts`
- 메일 발송 서비스: Resend
- 수신 이메일: `CONTACT_TO_EMAIL`
- 발신 이메일: `CONTACT_FROM_EMAIL`

문의폼 제출 시 브라우저 메일 프로그램이나 Outlook은 열리지 않습니다.
사용자가 `문의 보내기`를 누르면 `fetch("/api/contact")`로 서버에 POST 요청을 보내고, 서버에서 Resend로 이메일을 발송합니다.

## 필요한 환경변수

Vercel에 아래 환경변수를 등록해야 합니다.

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=ceo@saitour.kr
CONTACT_FROM_EMAIL=
```

- `RESEND_API_KEY`: Resend에서 발급받은 API Key
- `CONTACT_TO_EMAIL`: 문의를 받을 이메일 주소
- `CONTACT_FROM_EMAIL`: Resend에서 인증된 발신 이메일 주소

`RESEND_API_KEY`는 코드에 직접 작성하지 않습니다.

## Resend 설정 방법

1. Resend에 로그인합니다.
2. API Key를 생성합니다.
3. 발신 도메인 또는 발신 이메일을 인증합니다.
4. 인증된 발신 주소를 `CONTACT_FROM_EMAIL`에 입력합니다.

예시:

```env
CONTACT_FROM_EMAIL=SAITOUR <contact@saitour.net>
```

Resend는 인증되지 않은 발신 주소로는 운영 발송이 제한될 수 있습니다.

## Resend 테스트 발송 주의사항

Resend에서 기본으로 제공하는 `onboarding@resend.dev`는 테스트용 발신 주소입니다.
이 주소를 `CONTACT_FROM_EMAIL`로 사용할 경우, Resend 정책에 따라 수신 이메일이 Resend 가입 이메일로 제한될 수 있습니다.

임시 테스트가 실패한다면 Vercel 환경변수의 `CONTACT_TO_EMAIL`을 먼저 Resend 가입 이메일로 바꿔 테스트하세요.
현재 테스트 수신 권장값:

```env
CONTACT_TO_EMAIL=nakata673@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

운영 발송은 `saitour.net` 또는 `saitour.kr` 도메인을 Resend에서 인증한 뒤 사용하는 것을 권장합니다.
도메인 인증 후에는 예를 들어 아래처럼 운영 발신 주소를 사용할 수 있습니다.

```env
CONTACT_TO_EMAIL=ceo@saitour.kr
CONTACT_FROM_EMAIL=SAITOUR <contact@saitour.net>
```

## Vercel 환경변수 등록 방법

1. Vercel 프로젝트로 이동합니다.
2. `Settings` > `Environment Variables` 메뉴를 엽니다.
3. 아래 3개 값을 등록합니다.
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Production 환경에 적용합니다.
5. 저장 후 사이트를 다시 배포합니다.

## 문의폼 필수값

아래 항목은 입력해야 전송됩니다.

- 이름
- 연락처
- 문의 내용
- 개인정보 수집 동의

이메일과 문의 유형은 선택값입니다.

서버에서도 필수값을 다시 검증합니다.

## 테스트 방법

### 로컬 테스트

프로젝트 루트에 `.env.local`을 만들고 아래 값을 입력합니다.

```env
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=nakata673@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

실행:

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 문의폼을 제출합니다.

### 배포 후 테스트

1. 배포된 사이트에 접속합니다.
2. 문의폼에 테스트 내용을 입력합니다.
3. `문의 보내기`를 클릭합니다.
4. 아래 성공 메시지가 보이는지 확인합니다.

```text
문의가 접수되었습니다. 확인 후 빠르게 연락드리겠습니다.
```

5. 테스트 단계에서는 Resend 가입 이메일 또는 `CONTACT_TO_EMAIL`로 설정한 메일함에 문의 메일이 도착했는지 확인합니다.
6. 운영 전에는 Resend 도메인 인증 후 `CONTACT_TO_EMAIL=ceo@saitour.kr`로 변경합니다.

## 주의사항

- DB 저장 기능은 현재 구현하지 않았습니다.
- API Key는 반드시 Vercel 환경변수로만 관리합니다.
- Resend 발신 주소 인증이 완료되어야 실제 메일 발송이 안정적으로 동작합니다.
- 메일 발송 실패 시 사용자는 아래 메시지를 보게 됩니다.

```text
전송 중 오류가 발생했습니다. 카카오 상담 또는 전화로 문의해주세요.
```
