<template>
  <div class="flash-messages">
      <transition-group name="notification-animation">
    <Notification v-for="notification in notifications"
      :key="notification.timeStamp"
      :type="notification.type">

      {{ notification.message }}

    </Notification>
    </transition-group>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
export default {
  name: 'FlashMessage',
  components: {
    Notification
  },
  data () {
    return {
      notifications: []
    }
  },
  methods: {
    addNotification (event) {
      this.notifications.unshift({
        type: event.type,
        message: event.message,
        timeStamp: new Date().getTime()
      })

      setTimeout(() => {
        this.notifications.pop()
      }, 5000)
    }
  },
  created () {
    this.eventHub.$on('notification', event => {
      this.addNotification(event)
    })
  }
}
</script>

<style lang="scss" scoped>
  .flash-messages {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }

  .notification-animation-enter-active {
    transition: transform 300ms ease-out, opacity 400ms;
  }

  .notification-animation-enter {
    opacity: 0.8;
    transform: scale(1);
  }

  .notification-animation-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .notification-animation-leave-active {
    transition: transform 300ms ease-out, opacity 300ms;
  }

  .notification-animation-leave-to {
    opacity: 0;
    transform: scale(1);
  }
</style>
