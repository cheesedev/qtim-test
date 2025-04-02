<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <div class="footer__slogan">
          <p>Is there a project?</p>
          <h2 class="footer__title">
            Let's work together
          </h2>
        </div>
        <div class="footer__contacts">
          <div class="footer__address">
            <div class="footer__address-title">
              For all questions
            </div>
            <div class="footer__address-info">
              +7 (920) 278—00—68 <br>
              qtim@agency.com
            </div>
          </div>
          <div class="footer__address">
            <div class="footer__address-title">
              Office in Russia
            </div>
            <div class="footer__address-info">
              139 Ruben Station Lake Drew, NM 52678
            </div>
            <a href="#" class="footer__address-button">
              <img src="~/assets/icons/message.svg" alt="message">
            </a>
          </div>
          <div class="footer__address">
            <div class="footer__address-title">
              Office in Dubai
            </div>
            <div class="footer__address-info">
              139 Ruben Station Lake Drew, NM 52678
            </div>
            <a href="#" class="footer__address-button">
              <img src="~/assets/icons/message.svg" alt="message">
            </a>
          </div>
        </div>
      </div>
      <div class="footer__links">
        <div class="footer__link-group">
          <a href="#" class="footer__link">Facebook</a>
          <a href="#" class="footer__link">Instagram</a>
          <a href="#" class="footer__link">Telegram</a>
        </div>
        <div class="footer__link-group">
          <a href="#" class="footer__link">Behance</a>
          <a href="#" class="footer__link">LinkedIn</a>
          <a href="#" class="footer__link">Privacy Policy</a>
        </div>
      </div>
      <div class="footer__go">Go</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    position: relative;
    overflow: hidden;
    background: $lavender;
    padding-top: 140px;
    padding-bottom: 30px;
    font-size: 16px;

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__slogan {
      max-width: 590px;
      text-align: left;
    }

    &__title {
      font-size: 112px;
      text-decoration: underline;
      margin-top: 32px;
      font-weight: 200;
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: 36px;
      max-width: 180px;
    }

    &__address {

      &-info {
        margin-top: 12px;
      }

      &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: $black;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-top: 8px;

        &:hover {
          background: $dark-gray;
        }
      }
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 270px;
    }

    &__link-group {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    &__link {
      text-decoration: underline;
    }

    &__go {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: calc((358px/2) * -1);
      left: calc(50% - (358px/2));
      width: 358px;
      height: 358px;
      border-radius: 50%;
      padding-bottom: 90px;
      color: $light-gray;
      background: $black;
      font-size: 32px;
      cursor: pointer;
      user-select: none;

      &:hover {
        width: 390px;
        height: 390px;
        bottom: calc((390px/2) * -1);
        left: calc(50% - (390px/2));
        background: $dark-gray;
      }
    }
  }
</style>
